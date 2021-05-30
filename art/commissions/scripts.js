
const groups = document.getElementsByClassName("emote-group"),
bgs = {
    "lighter": "#F7F7F8",
    "light": "#EFEEF1",
    "dark": "#212126",
    "darker": "#000000"
};
for (let group of groups)
{
    const emotes = group.getElementsByClassName("emote"),
        channel = group.getAttribute("data-channel"),
        prefix = group.getAttribute("data-prefix"),
        divs = [];
    // Generate BGs
    const previewLabel = document.createElement("h3");
    previewLabel.innerText = channel;
    group.append(previewLabel);
    for (let bgName in bgs)
    {
        const bgDiv = document.createElement("div"),
            previewText = document.createElement("p"),
            nameSpan = document.createElement("span");
        bgDiv.classList.add("bg");
        bgDiv.classList.add(bgName);
        bgDiv.style.background = bgs[ bgName ];
        divs.push(bgDiv);
        group.append(bgDiv);

        // Name Span
        nameSpan.innerText = channel;
        previewText.append(nameSpan);
        previewText.append(":");
        bgDiv.append(previewText);
    }
    for (let emote of emotes)
    {
        const img = document.createElement("img"),
            name = `${ prefix }${ emote.getAttribute("data-emote") }`,
            path = `images/${ channel }/${ name }.png`;
        img.src = path;
        for (let div of divs)
        {
            // Create elements
            const wrapper = document.createElement("div"),
                preview = document.createElement("div"),
                previewName = document.createElement("h3"),
                previewLink = document.createElement("a"),
                previewChannel = document.createElement("h4");
            // Classify
            wrapper.classList.add("wrapper");
            preview.classList.add("preview");
            // Build
            preview.append(img.cloneNode(true));
            previewName.innerText = name;
            previewLink.innerText = channel;
            previewLink.setAttribute("href", `https://twitch.tv/${ channel }`);
            preview.append(previewName);
            previewChannel.innerText = "Channel: ";
            previewChannel.append(previewLink);
            preview.append(previewChannel);
            wrapper.append(preview);
            wrapper.append(img.cloneNode(true));
            div.append(wrapper);
        }
    }
    group.style.display = "block";
}
