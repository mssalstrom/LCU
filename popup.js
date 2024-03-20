

let fixRun = document.getElementById("run");
let pageRevert = document.getElementById("revert");


fixRun.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fixUp
    });
});

pageRevert.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: revertFix
    });
});



function fixUp() {

    /*
    Creating a standard order - For cut off tables
    TODO: STiCKY HEADERS and GLASS PANE / SAVE AND CLOSE/ TABLES / element.style / Widget Removal
    */
    
    targetIFrame = window.top.document.querySelector('div > iframe[class="tutorial-practice__iframe"]').contentWindow;

    // Removes iFrame dots
    const iFrames = targetIFrame.document.querySelectorAll('[id="letznav-iframe-script"]');
    iFrames.forEach(element => element.remove());

    // Removes iFrame box
    const boxFrames = targetIFrame.document.querySelectorAll('div[id="__af_Z_maskingframe"]');
    boxFrames.forEach(element => element.remove());

    // Sets stlye attribute of Actions button
    const actionsButton = targetIFrame.document.querySelector("#pt1\\:r1\\:0\\:r0\\:0\\:r1\\:0\\:AP1\\:ctb2 > table > tbody > tr > td.x3ea > a > span")
    if (actionsButton) {
        actionsButton.setAttribute('style', 'font-size: 12px; font-weight: bold;');
    } else {
        console.log('Actions Button Not Found.');
    }

    // Removes News and Announcement div
    const newsAndAnnouncments = targetIFrame.document.querySelectorAll('div[id$=":r1j_id_2"]');
    newsAndAnnouncments.forEach(element => element.remove());

    // Finds all headers with the appropriate class and sets their width/max-width
    const headerWidth = targetIFrame.document.querySelectorAll('.x1hh');
    headerWidth.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');

    const headerWidth2 = targetIFrame.document.querySelectorAll('.xnr');
    headerWidth2.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');

    // Finds h3 headers and sets their width/max-width 
    const header3Width = targetIFrame.document.querySelectorAll('div[class="x1hj"]');
    header3Width.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');

    // Finds title header and sets width/max-width
    const titleHeader = targetIFrame.document.querySelectorAll('div[class="x1dd"]');
    titleHeader.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');

    // Sets the Width of the Setup drop-down list (Setup and Maintenece landing page)
    const setupAndMaintenceDropDown = targetIFrame.document.querySelector(' ul[class*="x1r1"]');
    if (setupAndMaintenceDropDown) {
        setupAndMaintenceDropDown.setAttribute('style', 'width: 348px;');
    }

    // Sets the width/heigh of the AFModalGlassPane to 5000x5000
    const glassPane = targetIFrame.document.querySelector('div[class="AFModalGlassPane"]');
    if (glassPane) {
        glassPane.setAttribute('style', 'width: 5000px; height: 5000px;');
    } else {
        console.log('Actions Button Not Found.');
    }

    // Sets the overflow for the view/format buttons div to visisble
    const viewButton = targetIFrame.document.querySelectorAll('div[class="x6e"]');
    viewButton.forEach(element => element.style.overflow = 'visible');


    // Adjust spacing between divs so buttons don't get smushed
    const plusButton = targetIFrame.document.querySelectorAll('div[id$=":AT1:_ATp:ATtb1"]');
    plusButton.forEach(element => element.style.cssText = 'left: 8px;');

    // Removes need help widget
    const widgetButton = targetIFrame.document.querySelectorAll('letznav-app-player[id="apty-player-root"]')
    if (widgetButton) {
        widgetButton.forEach(element => element.remove());
    }

    // Increase height of search results table by 10px
    const resultsTable = targetIFrame.document.querySelectorAll('div[class="xkh xeo xkh"]');
    resultsTable.forEach(element => {
        const currentHeight = element.offsetHeight; // Get current height
        element.style.height = `${currentHeight + 10}px`; // Set new height with addition
    });
}

// revert
function revertFix() {
    location.reload();
}