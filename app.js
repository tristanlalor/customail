let DOM = {
    recipients: document.querySelector(".recipients input"),
    cc: document.querySelector(".cc input"),
    subject: document.querySelector(".subject input"),
    emailBody: document.querySelector(".email-body textarea"),
    altText: document.querySelector(".alt-text input"),
    button: document.querySelector(".button")
}
let generateLink = () => {
    let href, link, tweetableLink;
    recipients = DOM.recipients.value;
    cc = DOM.cc.value;
    subject = DOM.subject.value.replace(/\n/g, '%0d%0a').replace(/ /g, '%20');
    emailBody = DOM.emailBody.value.replace(/\n/g, '%0d%0a').replace(/ /g, '%20');
    altText = DOM.altText.value;

    console.log(cc);
    href = `mailto:${recipients}?bcc=${cc}&subject=${subject}&body=${emailBody}`
    link = `
    <div id="link">Custom Link (copy and paste): <a href="${href}" rel="EMAIL">${altText}</a></div>
    `;
    tweetableLink = `
    <div id="link-2">Tweetable Link: <a id="link-2" href="https://customail.co/#${href}">Right click and "copy link address".</a></div>
    `;
    if (document.querySelector("#link")) {
        document.querySelector("#link").remove();
    }
    if (document.querySelector("#link-2")) {
        document.querySelector("#link-2").remove();
    }

    document.querySelector(".output").insertAdjacentHTML('afterbegin', link);
    document.querySelector(".output").insertAdjacentHTML('afterbegin', tweetableLink);

}
DOM.button.addEventListener('click', generateLink);
// var importantStuff = window.open('', '_blank');



// window.location.href = 'mailto:tashe@leg.state.vt.us,mjohnson@leg.state.vt.us?bcc=jwhite@leg.state.vt.us,scopelandhanzas@leg.state.vt.us,mgrad@leg.state.vt.us,rsears@leg.state.vt.us&amp;subject=Transparency%20for%20Police%20Disciplinary%20Records%20&amp;body=Hello,%0d%0dI%20am%20a%20resident%20of%20Vermont%20living%20in%20[city/town%20name].%0d%0dI%20urge%20you%20to%20pass%20legislation%20that%20allows%20police%20disciplinary%20records%20to%20be%20publicly%20available%20at%20the%20local%20and%20state%20level.%20When%20an%20officer%20harms%20our%20community,%20we%20deserve%20to%20know.%20This%20is%20common%20sense%20transparency%20that%20will%20help%20the%20public%20know%20if%20there%20is%20a%20pattern%20of%20abuse.%0d%0dYou%20cannot%20allow%20abusive%20individuals%20to%20hide%20behind%20an%20antiquated%20policy%20of%20secrecy.%0d%0dLocal%20police%20departments%20may%20withhold%20disciplinary%20records%20under%201%20V.S.A.%20§%20317(c)(7).%20Internal%20investigations%20of%20Vermont%20state%20troopers%20are%20conducted%20by%20the%20State%20Police%20Advisory%20Commission%20and%20confidential%20under%2020%20V.S.A.%20§%201923.%20These%20state%20laws%20must%20be%20amended%20to%20allow%20the%20public%20access%20to%20these%20important%20records.%0d%0dThe%20actions%20you%20take%20now%20will%20be%20noted%20by%20all%20of%20your%20constituents.%20We%20cannot%20settle%20for%20band-aids%20during%20this%20moment%20in%20our%20country’s%20history.%20%0d%0dSincerely%20%0d%0d[Your%20Name]%0d';
// window.onload=function(){
//     document.getElementById("default").click();
//   };