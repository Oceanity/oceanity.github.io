"use strict";

$(() => {
    const doneTypingInterval = 500,
        chatline = $("#chatline"),
        commandChar = "/";

    let showNSFW = false,
        tenorSearch = "";

    const {
        log
    } = console,
    messageBuffer = $("#messagebuffer"),
        chatWrap = $("#chatwrap");

    // Simulate Enter
    const PressEnter = $.Event("keydown", {
        keyCode: 13,
    });

    // Create Tenor Modal
    const tenorModal = $("<div>", {
            id: "tenorgifmodal",
        }),
        tenorSwitches = $("<div>", {
            id: "tenorgifswitches",
        }),
        tenorGroupShowNSFW = $("<div>", {
            class: "checkboxGroup",
        }),
        tenorInputShowNSFW = $("<input>", {
            type: "checkbox",
            id: "shownsfw",
        }),
        tenorLabelShowNSFW = $("<label>", {
            for: "shownsfw",
            text: "Show NSFW",
        }),
        tenorGifList = $("<ul>");

    // Switch Functions
    tenorInputShowNSFW.change(function (e) {
        showNSFW = e.target.checked;
        GetTenorImages();
    });

    // Build DOM
    tenorGroupShowNSFW.append(tenorInputShowNSFW).append(tenorLabelShowNSFW);
    tenorSwitches.append(tenorGroupShowNSFW);
    tenorModal.append(tenorSwitches, tenorGifList);
    chatWrap.append(tenorModal);

    // Tenor Functions
    function GetTenorImages() {
        log(`Searching Tenor for: ${tenorSearch}, safe search ${showNSFW ? "off" : "on"}`);
        tenorGifList.empty();
        tenorModal.show(function () {
            $.ajax({
                url: `https://api.tenor.com/v1/search?key=WGK7H58Q6TXZ&q=${tenorSearch}&locale=en_US&media_filter=minimal&contentfilter=${showNSFW ? "off" : "high"}`,
                success: function (res) {
                    const {
                        results
                    } = res;
                    for (let gif of results) {
                        const {
                            media,
                            url
                        } = gif;
                        let first = media.shift();
                        let gifItem = $("<li>", {
                                "data-full": first.gif.url,
                            }),
                            gifImg = $("<img>", {
                                src: first.tinygif.url,
                            });

                        gifItem.click(function (e) {
                            chatline.val($(this).data("full")).trigger(PressEnter);
                            tenorModal.hide(function () {
                                tenorGifList.empty();
                            });
                        });
                        // Build to DOM
                        gifItem.append(gifImg);
                        tenorGifList.append(gifItem);
                    }
                },
            });
        });
    }

    tenorGifList.bind("mousewheel", function (e) {
        e.preventDefault();
        this.scrollLeft -= e.originalEvent.wheelDelta;
    });
    tenorGifList.bind("DOMMouseScroll", function (e) {
        e.preventDefault();
        this.scrollLeft += e.originalEvent.detail * 40;
    });

    let typingTimer;

    log("Initialized Oceanity Custom JS");

    $("div[class^='chat-msg-']").each(function (index, element) {
        EmbedImages(element);
    });

    // Override chatbox
    // messageBuffer.attr("id", "oceanity-messagebuffer");
    socket.on("*", data => {
        log("clear");
    });
    socket.on("chatMsg", data => {
        const {
            username,
            msg,
            meta,
            time
        } = data,
        byAuthor = document.getElementsByClassName(`chat-msg-${username}`);
        EmbedImages(byAuthor[byAuthor.length - 1]);
    });

    // Detect when user stops typing
    chatline.on("keyup", function (e) {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(DoneTyping, doneTypingInterval);
    });

    function DoneTyping() {
        if (chatline.val().length && chatline.val().indexOf(commandChar) == 0) {
            let input = chatline.val().split(" "),
                command = input.shift().substr(1).toLowerCase(),
                args = input.join(" ").trim();

            switch (command) {
                case "tenor":
                    tenorSearch = args;
                    GetTenorImages();
                    return;
                default:
                    break;
            }
        }

        // If no return, empty and remove modals
        tenorModal.fadeOut(function () {
            tenorGifList.empty();
        });
    }

    function EmbedImages(element) {
        $(element)
            .find("a")
            .each(function (index, link) {
                const $link = $(link);
                let href = link.href;

                // Check if wikia link and remove revision text if so
                if (href.match(/.+wikia.+\.\w{3,4}\/revision\/.+/gi) != -1) {
                    href = href.split("/revision/")[0];
                    $link.attr("href", href);
                }

                // Check if link is a direct link to image
                TestImage(href, isImage => {
                    if (isImage) {
                        const img = $("<img>", {
                                onload: function () {
                                    messageBuffer.scrollTop(messageBuffer[0].scrollHeight);
                                },
                                src: href,
                            }),
                            line = $("<div>", {
                                class: "embedded-image",
                            }),
                            wrapper = $("<div>", {
                                class: "embedded-image-wrapper",
                            });
                        $link.addClass("image-link").text("");
                        line.insertAfter($(link));
                        line.append(wrapper);
                        wrapper.append(img);
                        wrapper.append($link);
                        messageBuffer.scrollTop(messageBuffer[0].scrollHeight);
                    }
                    // Else match certain sites
                    else {
                        // Check YouTube
                        const youTubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi,
                            youTubeMatch = youTubeRegex.exec(href);
                        if (youTubeMatch) {
                            const line = $("<div>", {
                                    class: "embedded-frame",
                                }).appendTo($link.parent()),
                                wrapper = $("<div>", {
                                    class: "embedded-frame-wrapper",
                                }).appendTo(line),
                                iframe = $("<iframe>", {
                                    src: `https://www.youtube.com/embed/${youTubeMatch[1]}`,
                                    frameborder: 0,
                                }).appendTo(wrapper);

                            $link.addClass("embed-link");
                            messageBuffer.scrollTop(messageBuffer[0].scrollHeight);
                        }
                        // Check Twitter
                        const twitterRegex = /(?:https?\/\/)?(?:www\.)?twitter\.com\/(?:.+)\/status\/(?:\d+)/gi,
                            twitterMatch = twitterRegex.exec(href);
                        if (twitterMatch) {
                            log(`%c[Twitter link found, embedding]`, "color:#1DA1F2");
                            $.ajax({
                                url: `https://publish.twitter.com/oembed?url=${href}&theme=dark&widget=Tweet`,
                                dataType: "jsonp",
                                success: function (data) {
                                    log(data);
                                    $link.parent().html(data.html);
                                },
                            });
                        }
                    }
                });
            });
    }

    function TestImage(url, callback, timeout = 5000) {
        var timedOut = false,
            timer;
        var img = new Image();
        img.onerror = img.onabort = function () {
            if (!timedOut) {
                clearTimeout(timer);
                callback(false);
            }
        };
        img.onload = function () {
            if (!timedOut) {
                clearTimeout(timer);
                callback(true);
            }
        };
        img.src = url;
        timer = setTimeout(function () {
            timedOut = true;
            callback(null);
        }, timeout);
    }
});
