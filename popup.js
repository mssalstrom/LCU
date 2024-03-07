


let fixRun = document.getElementById("run");
let pageRevert = document.getElementById("revert");


fixRun.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fixUp,
    });
});

pageRevert.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: revertFix,
    });
});



function fixUp() {

    const iFrames = document.querySelectorAll('[id="letznav-iframe-script"]');
    iFrames.forEach(element => element.remove());

    // Removes iFrame box
    const boxFrames = document.querySelectorAll('div[id="__af_Z_maskingframe"]');
    boxFrames.forEach(element => element.remove());

    // Sets stlye attribute of Actions button
    const actionsButton = document.querySelector("#pt1\\:r1\\:0\\:r0\\:0\\:r1\\:0\\:AP1\\:ctb2 > table > tbody > tr > td.x3ea > a > span")
    if (actionsButton) {
        actionsButton.setAttribute('style', 'font-size: 12px; font-weight: bold;');
    } else {
        console.log('Actions Button Not Found.');
    }

    // Finds all headers with the appropriate class and sets their width/max-width
    const headerWidth = document.querySelectorAll('.x1hh');
    headerWidth.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');

    // Sets the overflow for the view button to visisble
    const viewButton = document.querySelectorAll('div[id$=":_ATp:j_id96"]');
    viewButton.forEach(element => element.style.overflow = 'visible');

    // Sets the overflow for the view button to visisble
    const viewButton2 = document.querySelectorAll('div[id$=":_ATp:j_id201"]');
    viewButton2.forEach(element => element.style.overflow = 'visible');

    // Another View div
    const viewButton3 = document.querySelectorAll('div[id$=":_ATp:j_id66"]');
    viewButton3.forEach(element => element.style.overflow = 'visible');


    // Even another view div
    const viewButton4 = document.querySelectorAll('div[id$=":_ATp:j_id52"]');
    viewButton4.forEach(element => element.style.overflow = 'visible');

    // Oh look another view div
    const viewButton5 = document.querySelectorAll('div[id$=":_ATp:j_id43"]');
    viewButton5.forEach(element => element.style.overflow = 'visible');

    // This should actually do them all DELETE ABOVE IS SO

    const viewButtonAll = document.querySelectorAll('div[class="x6e"]');
    viewButtonAll.forEach(element => element.style.overflow = 'visible');


    // Finds h3 headers and sets their width/max-width 
    const header3Width = document.querySelectorAll('div[class="x1hj"]');
    header3Width.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');

    // Adjust spacing between divs so buttons don't get smushed
    const plusButton = document.querySelectorAll('div[id$=":AT1:_ATp:ATtb1"]');
    plusButton.forEach(element => element.style.cssText = 'left: 8px;');


    // Increase height of search results table by 10px
    const resultsTable = document.querySelectorAll('div[class="xkh xeo xkh"]');
    resultsTable.forEach(element => {
        const currentHeight = element.offsetHeight; // Get current height
        element.style.height = `${currentHeight + 10}px`; // Set new height with addition
    });
}

// revert
function revertFix() {
    location.reload();
}