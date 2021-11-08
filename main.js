const LinksSocialMedia = {

    github : "juliozulu2008",
    youtube : "channel/UCkaIlVymmUn5CzoApqroc8w",
    instagram : "julio.c.dias",
    facebook : "julio.cesar.diasdosantos",
    twitter : "Blackdeath090?t=KN1H48OUjiDp-2tky05TLA&s=08"
}
function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}/`             
    }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    fetch(url).then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login

    })
}
getGithubProfileInfos()
