

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
    TODO: STiCKY HEADERS / TABLES / element.style / Check tips and trick board
    Text wrap for save and close buttons
    More tables ---- Search Results dialog tables - [id$="_afrLovInternalTableId"]
    CHECK: Modifying installments, Creating a corporate card program (save & close buttons, increment/decrement arrows)
    CHECK: Crediting an Existing Transaction DHL for demo maybe
    */

    targetIFrame = window.top.document.querySelector('div > iframe[class="tutorial-practice__iframe"]').contentWindow;

    // Removes iFrame dots
    const iFrames = targetIFrame.document.querySelectorAll('[id="letznav-iframe-script"]');
    if (iFrames) {
        iFrames.forEach(element => element.remove());
    }


    // Removes iFrame box
    const boxFrames = targetIFrame.document.querySelectorAll('div[id="__af_Z_maskingframe"]');
    if (boxFrames) {
        boxFrames.forEach(element => element.remove());
    }


    // Sets stlye attribute of Actions button
    const actionsButton = targetIFrame.document.querySelector("#pt1\\:r1\\:0\\:r0\\:0\\:r1\\:0\\:AP1\\:ctb2 > table > tbody > tr > td.x3ea > a > span")
    if (actionsButton) {
        actionsButton.setAttribute('style', 'font-size: 12px; font-weight: bold;');
    } else {
        console.log('Actions Button Not Found.');
    }

    // Save and close button
    // Was working now it's not. Need to revist ASAP
    const saveAndCloseButtons = targetIFrame.document.querySelectorAll('span[class="xx6"]');
    if (saveAndCloseButtons) {
        saveAndCloseButtons.forEach(element => {
            element.style.cssText = 'font-size: 12px; color: white; font-weight: bold;';
        });
    }


    // Save and close button (Depreciated but still in DHL tutorials)
    // Was working now it's not. Need to revist ASAP
    const saveAndCloseButtonsDHL = targetIFrame.document.querySelectorAll('span[class="xtb"]');
    if (saveAndCloseButtonsDHL) {
        saveAndCloseButtonsDHL.forEach(element => {
            element.style.cssText = 'font-size: 12px; font-weight: bold;';
        });
    }

    // Text wrap fix for Save and Close buttons in dialogs (will need to be looked at. Was configured with old DHL tutorial)
    const textWrapButtons = targetIFrame.document.querySelectorAll('button[class="xxd p_AFTextOnly"]');
    if (textWrapButtons) {
        textWrapButtons.forEach(element => {
            element.style.cssText = 'text-wrap: nowrap;';
        });
    }

    //action and format and view dropdown text resize
    const viewDropDown = targetIFrame.document.querySelectorAll('a[class="xh7"]')
    if (viewDropDown) {
        viewDropDown.forEach(element => element.style.cssText = 'font-size: 12px;')
    }


    // Removes News and Announcement div
    const newsAndAnnouncments = targetIFrame.document.querySelectorAll('div[id$=":r1j_id_2"]');
    if (newsAndAnnouncments) {
        newsAndAnnouncments.forEach(element => element.remove());
    }


    // Finds all headers with the appropriate class and sets their width/max-width
    const headerWidth = targetIFrame.document.querySelectorAll('.x1hh');
    if (headerWidth) {
        headerWidth.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
    }

    // Depreciated classes for old captures
    const headerWidthOLD = targetIFrame.document.querySelectorAll('.x1de');
    if (headerWidthOLD) {
        headerWidthOLD.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
    }

    // Depreciated classes for smaller headers (search)
    const headerWidthOLD2 = targetIFrame.document.querySelectorAll('.x1dg');
    if (headerWidthOLD2) {
        headerWidthOLD2.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');

    }

    // Depreciated classes for smaller headers (search)
    const headerWidthOLD3 = targetIFrame.document.querySelectorAll('.x1df');
    if (headerWidthOLD3) {
        headerWidthOLD3.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
    }


    const headerWidth2 = targetIFrame.document.querySelectorAll('.xnr');
    if (headerWidth2) {
        headerWidth2.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
    }

    // Finds h3 headers and sets their width/max-width 
    const header3Width = targetIFrame.document.querySelectorAll('div[class="x1hj"]');
    if (header3Width) {
        header3Width.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
    }


    // Finds title header and sets width/max-width
    const titleHeader = targetIFrame.document.querySelectorAll('div[class="x1dd"]');
    if (titleHeader) {
        titleHeader.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
    }


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
    if (viewButton) {
        viewButton.forEach(element => element.style.overflow = 'visible');
    }


    // Adjust spacing between divs so buttons don't get smushed
    const plusButton = targetIFrame.document.querySelectorAll('div[id$=":AT1:_ATp:ATtb1"]');
    if (plusButton) {
        plusButton.forEach(element => element.style.cssText = 'left: 8px;');
    }


    // Removes need help widget
    const widgetButton = targetIFrame.document.querySelectorAll('#letznav-frame-script');
    for (const element of widgetButton) {
        element.parentNode.removeChild(element);
    }

    // Enforces UTF-8 formatting in the <head> tag
    const headFix = targetIFrame.document.querySelector('head');
    const metaAdd = targetIFrame.document.createElement('meta');
    metaAdd.httpEquiv = 'Content-Type';
    metaAdd.content = 'text/html; charset=UTF-8';
    // Remove the incorrect style attribute
    metaAdd.removeAttribute('style');
    headFix.appendChild(metaAdd);


    // Fixes tabs and white bar alignement for steps 1-3
    // const selectedTab = targetIFrame.document.querySelectorAll('div[class="flat-tabs-item selected"][aria-selected="true"]')
    // const navmenuContainer = targetIFrame.document.getElementById("navmenu-container");
    // const whiteBar = targetIFrame.document.querySelector('div.flat-tabs-line-selected');

    // // Remove child elements until a selected tab is found
    // navmenuContainer.childNodes.forEach((child) => {
    //     if (!child.classList.contains("flat-tabs-item") || child.getAttribute("aria-selected") !== "true") {
    //         navmenuContainer.removeChild(child);
    //     }
    // });

    // // Style adjustments
    // if (navmenuContainer) {
    //     navmenuContainer.style.left = "0px";
    // }
    // if (whiteBar) {
    //     whiteBar.style.left = "0px";
    // }
}


// revert
function revertFix() {
    location.reload();
}