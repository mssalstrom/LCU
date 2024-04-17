
const fixRun = document.getElementById("run");
const pageRevert = document.getElementById("revert");


// Stores and shows what was fixed as a window alert. ***Not working and I don't know why =( 
class PopupMessage {
    constructor(message = "Fixed") {
        this.message = message;
    }

    addMessage(message) {
        this.message += message + "\n";
        return this.message;
    }

    show() {
        window.alert(this.message);
    }
}

const messagePopup = new PopupMessage();

fixRun.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fixUp,
        args: [messagePopup]
    });

    window.close();

});

pageRevert.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: revertFix
    });
});


/* assuming fixUp returns a PopupMessage object:
  ...  
  args: [messagePopUp]
})
  .then((popupObj) => popupObj.show());
  where the argument in the then method is the returned value from the Promise

const popupObj = await chrome.scripting.executeScript(...);
opupObj.show()
 
*/

function fixUp(messagePopup) {
    // messagePopup.addMessage('TEST');
    /*
    Creating a standard order - For cut off tables
    TODO: STiCKY HEADERS / TABLES / element.style / Check tips and trick board
    Text wrap for save and close buttons
    More tables ---- Search Results dialog tables - [id$="_afrLovInternalTableId"]
    CHECK: Modifying installments, Creating a corporate card program (save & close buttons, increment/decrement arrows)
    CHECK: Crediting an Existing Transaction DHL for demo maybe
    Approving an Invoice Adjustment ----- GARBLED TEXT NEEDS TO BE FIXEDDDDDD
    Viewing the project performance dashboard ----- HEADES AND TABLES WOOOO
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
    const actionsButton = targetIFrame.document.querySelector('a[aria-describedby$="_afrdescBy"]');
    if (actionsButton) {
        actionsButton.setAttribute('style', 'font-size: 12px; font-weight: bold;');
    } else {

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
    const headerWidth = targetIFrame.document.querySelectorAll('[id$="::_afrTtxt"] > div');
    if (headerWidth) {
        headerWidth.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
    }


    // Sets the Width of the Setup drop-down list (Setup and Maintenece landing page)
    const setupAndMaintenceDropDown = targetIFrame.document.querySelector(' ul[class*="x1r1"]');
    if (setupAndMaintenceDropDown) {
        setupAndMaintenceDropDown.setAttribute('style', 'width: 348px;');
    }

    // Sets the Width of the Inovice Actions (MCD ERP) drop-down list
    const mcdInvoiceActions = targetIFrame.document.querySelector('table[id$=":me1::ScrollContent"]');
    if (mcdInvoiceActions) {
        mcdInvoiceActions.setAttribute('style', 'width: 320px;');
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

    // MCD Hidden Headers
    const mcDHiddenHeaders = targetIFrame.document.querySelector('div[id$=":SPpsl3::m"]');
    if (mcDHiddenHeaders) {
        mcDHiddenHeaders.style.overflowX = 'visible';
        mcDHiddenHeaders.style.height = '35px';
    }

    // Removes need help widget
    const widgetButton = targetIFrame.document.querySelectorAll('#letznav-frame-script');
    for (const element of widgetButton) {
        element.parentNode.removeChild(element);
    }

    // MCD ERP Team Members table cutoff fix
    const MCDTeamMembersTable = targetIFrame.document.querySelector('div[id$=":psl1::t"]');
    if (MCDTeamMembersTable) {
        MCDTeamMembersTable.style.overflow = 'visible';
    }

    // Text wrap and elipses coded for header text (Works for MCD's need to revist)
    const headerWrap = targetIFrame.document.querySelector('span[class="x32h"]');
    const headerWrapTitle = headerWrap.title;
    if (headerWrap) {
        headerWrap.setAttribute('style', 'text-wrap: nowrap;');
        headerWrap.innerText = headerWrapTitle;
    }


    // Increases table height by 10px. Use with caution.
    // const tableHeight = targetIFrame.document.querySelectorAll('div[id*=":AT1:_ATp:table"]');
    // if (tableHeight) {
    //     const currentHeight = tableHeight.offsetHeight; // Get current height
    //     const newHeight = currentHeight + 10 + 'px'; // Add 10px to height with unit
    //     tableHeight.style.height = newHeight; // Set the new height
    //     tableHeight.forEach( element =>  element.style.cssText = newHeight);
    // };

    // Increase height of search results table by 10px USE WITH CAUTION
    const resultsTable = targetIFrame.document.querySelectorAll('div[id*="_ATp:table"]');
    if (resultsTable) {
        resultsTable.forEach(element => {
            const currentHeight = element.offsetHeight; // Get current height
            element.style.height = `${currentHeight + 10}px`; // Set new height with addition
        });
    }



    // Enforces UTF-8 formatting in the <head> tag
    // const headFix = targetIFrame.contentWindow.document.querySelector('head');
    // if (headFix) { 
    //     const metaTag = targetIFrame.contentWindow.document.createElement('meta');
    //     metaTag.httpEquiv = 'Content-Type';
    //     metaTag.content = 'text/html; charset=UTF-8';
    //     metaTag.style = "";
    //     headFix.appendChild(metaTag);
    // }



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

    return messagePopup;
}




// revert/refresh
function revertFix() {
    location.reload();
}