
const fixRun = document.getElementById("run");
const pageRevert = document.getElementById("revert");


/**
 * PopupMessage class is used to store and display messages.
 * 
 * @property {string} message - The message to be displayed.
 * 
 * @constructor
 * @param {string} [message="Fixed"] - The initial message.
 * 
 * @example
 * const messagePopup = new PopupMessage();
 * messagePopup.addMessage("Additional message");
 * messagePopup.show(); // Displays "FixedAdditional message"
 */
class PopupMessage {

    constructor(message = "Fixed:") {
        this.message = message;
    }
    addMessage(message) {
        this.message += message + "\n";
    }
    show() {
        window.alert(this.message);
    }
}

const messagePopup = new PopupMessage();

/**
 * Adds a click event listener to the 'fixRun' button.
 * 
 * When the 'fixRun' button is clicked, it queries the active tab in the current window,
 * executes the 'fixUp' function in the context of that tab, adds the return value of the
 * 'fixUp' function to the 'messagePopup' instance, displays the popup message, and closes the window.
 * 
 * @async
 * @function
 * @example
 * fixRun.addEventListener("click", async () => {
 *     // ...
 * });
 */
fixRun.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fixUp,
    });
    // results[0].result contains the return value of fixUp function
    messagePopup.addMessage(results[0].result);
    messagePopup.show();
    window.close();
});

/**
 * The 'fixUp' function is used modify the content of the active tab.
 * 
 * It is executed in the context of the active tab when the 'fixRun' button is clicked.
 * The return value of this function is added to the 'messagePopup' instance.
 * 
 * @function
 * @returns {string} The alert message.
 * 
 * @example
 * const results = await chrome.scripting.executeScript({
 *     target: { tabId: tab.id },
 *     function: fixUp,
 * });
 * 
 * @todo Implement sticky headers/tables/element.style. Check tips and trick board.
 * @todo Implement text wrap for save and close buttons.
 * @todo Implement more tables. Search Results dialog tables - [id$="_afrLovInternalTableId"].
 * @todo Check: Modifying installments, Creating a corporate card program (save & close buttons, increment/decrement arrows).
 * @todo Check: Crediting an Existing Transaction DHL for demo maybe.
 * @todo Fix: Approving an Invoice Adjustment - garbled text needs to be fixed.
 * @todo Fix: Viewing the project performance dashboard - headers and tables.
 */
function fixUp() {

    /*
    Viewing the project performance dashboard

    */

    // Holds alert message
    let messageHolder = "";

    // Target iFrame
    targetIFrame = window.top.document.querySelector('div > iframe[class="tutorial-practice__iframe"]').contentWindow;


    try {
        // Removes iFrame dots
        const iFrames = targetIFrame.document.querySelectorAll('[id="letznav-iframe-script"]');
        if (iFrames) {
            iFrames.forEach(element => element.remove());
            messageHolder += '\nRemoved iFrames';
        }
    } catch (error) {
        console.log('Iframes not found: ');
    };

    try {
        // Removes iFrame box
        const boxFrames = targetIFrame.document.querySelectorAll('div[id="__af_Z_maskingframe"]');
        if (boxFrames) {
            boxFrames.forEach(element => element.remove());
            messageHolder += '\nRemoved Box Frames';
        };
    } catch (error) {
        console.log('Box Frames not found: ');
    };

    try {
        // Sets stlye attribute of Actions button
        const actionsButton = targetIFrame.document.querySelector('a[aria-describedby$="_afrdescBy"]');
        if (actionsButton) {
            actionsButton.setAttribute('style', 'font-size: 12px; font-weight: bold;');
        };
    } catch (error) {
        console.log('Actions Button Not Found.');
    };

    try {
        // Save and close button
        // Was working now it's not. Need to revist ASAP
        const saveAndCloseButtons = targetIFrame.document.querySelectorAll('span[class="xx6"]');
        if (saveAndCloseButtons) {
            saveAndCloseButtons.forEach(element => {
                element.style.cssText = 'font-size: 12px; color: white; font-weight: bold;';
            });
        };
    } catch (error) {
        console.log('Save and Close Button Not Found.');
    };

    try {
        // Save and close button (Depreciated but still in DHL tutorials)
        // Was working now it's not. Need to revist ASAP
        const saveAndCloseButtonsDHL = targetIFrame.document.querySelectorAll('span[class="xtb"]');
        if (saveAndCloseButtonsDHL) {
            saveAndCloseButtonsDHL.forEach(element => {
                element.style.cssText = 'font-size: 12px; font-weight: bold;';
            });
        };
    } catch (error) {
        console.log('Save and Close Button Not Found.');
    };

    try {
        // Text wrap fix for Save and Close buttons in dialogs (will need to be looked at. Was configured with old DHL tutorial)
        const textWrapButtons = targetIFrame.document.querySelectorAll('button[class="xxd p_AFTextOnly"]');
        if (textWrapButtons) {
            textWrapButtons.forEach(element => {
                element.style.cssText = 'text-wrap: nowrap;';
            });
        };
    } catch (error) {
        console.log('Text Wrap Button Not Found.');
    };

    try {
        //action and format and view dropdown text resize
        const viewDropDown = targetIFrame.document.querySelectorAll('a[class="xh7"]')
        if (viewDropDown) {
            viewDropDown.forEach(element => element.style.cssText = 'font-size: 12px;')
        };
    } catch (error) {
        console.log('View Drop Down Button Not Found.');
    };

    try {
        // Removes News and Announcement div
        const newsAndAnnouncments = targetIFrame.document.querySelectorAll('div[id$=":r1j_id_2"]');
        if (newsAndAnnouncments) {
            newsAndAnnouncments.forEach(element => element.remove());
        };
    } catch (error) {
        console.log('News and Announcments Not Found.');
    };

    try {
        // Finds all headers with the appropriate class and sets their width/max-width
        const headerWidth = targetIFrame.document.querySelectorAll('[id$="::_afrTtxt"] > div');
        if (headerWidth) {
            headerWidth.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
        };
    } catch (error) {
        console.log('Header Width Not Found.');
    }

    try {
        // Sets the Width of the Setup drop-down list (Setup and Maintenece landing page)
        const setupAndMaintenceDropDown = targetIFrame.document.querySelector(' ul[class*="x1r1"]');
        if (setupAndMaintenceDropDown) {
            setupAndMaintenceDropDown.setAttribute('style', 'width: 348px;');
        };
    } catch (error) {
        console.log('Setup and Maintence Drop Down Not Found.');
    };

    try {
        // Sets the Width of the Inovice Actions (MCD ERP) drop-down list
        const mcdInvoiceActions = targetIFrame.document.querySelector('table[id$=":me1::ScrollContent"]');
        if (mcdInvoiceActions) {
            mcdInvoiceActions.setAttribute('style', 'width: 320px;');
        };
    } catch (error) {
        console.log('Invoice Actions Drop Down Not Found.');
    };

    try {
        // Sets the width/heigh of the AFModalGlassPane to 5000x5000
        const glassPane = targetIFrame.document.querySelector('div[class="AFModalGlassPane"]');
        if (glassPane) {
            glassPane.setAttribute('style', 'width: 5000px; height: 5000px;');
        } else {
            console.log('Actions Button Not Found.');
        };
    } catch (error) {
        console.log('Glass Pane Not Found.');
    };

    try {
        // Sets the overflow for the view/format buttons div to visisble
        const viewButton = targetIFrame.document.querySelectorAll('div[class="x6e"]');
        if (viewButton) {
            viewButton.forEach(element => element.style.overflow = 'visible');
        };
    } catch (error) {
        console.log('View Button Not Found.');
    };

    try {
        // MCD's Action Button (depreciated class) **Not working for some reason??***
        const mcdActionsButton = targetIFrame.document.querySelector('span[class="xri"]');
        if (mcdActionsButton) {
            mcdActionsButton.setAttribute('style', 'font-size: 12px; font-weight: bold;');
        };
    } catch (error) {
        console.log('MCD Actions Button Not Found.');
    };

    try {
        // Adjust spacing between divs so buttons don't get smushed
        const plusButton = targetIFrame.document.querySelectorAll('div[id$=":AT1:_ATp:ATtb1"]');
        if (plusButton) {
            plusButton.forEach(element => element.style.cssText = 'left: 8px;');
        };
    } catch (error) {
        console.log('Plus Button Not Found.');
    };

    try {
        // Removes Sticky Headers (Just for MCDs will revist)
        const mcDStickyHeaders = targetIFrame.document.querySelector('div[id$=":cupanel1:SPpsl2"]');
        if (mcDStickyHeaders) {
            mcDStickyHeaders.classList.remove('sticky-header');
        };
    } catch (error) {
        console.log('Sticky Headers Not Found.');
    };

    try {
        // MCD Hidden Headers
        const mcDHiddenHeaders = targetIFrame.document.querySelector('div[id$=":SPpsl3::m"]');
        if (mcDHiddenHeaders) {
            mcDHiddenHeaders.style.overflowX = 'visible';
            mcDHiddenHeaders.style.height = '35px';
            messageHolder += '\nFixed Hidden Headers';
        };
    } catch (error) {
        console.log('Hidden Headers Not Found.');
    };

    try {
        // Removes need help widget
        const widgetButton = targetIFrame.document.querySelectorAll('#letznav-frame-script');
        for (const element of widgetButton) {
            element.parentNode.removeChild(element);
        };
    } catch (error) {
        console.log('Need Help Widget Not Found.');
    };

    try {
        // MCD ERP Team Members table cutoff fix
        const MCDTeamMembersTable = targetIFrame.document.querySelector('div[id$=":psl1::t"]');
        if (MCDTeamMembersTable) {
            MCDTeamMembersTable.style.overflow = 'visible';
        };
    } catch (error) {
        console.log('MCD Team Members Table Not Found.');
    };

    try {
        // Text wrap and elipses coded for header text (Works for MCD's need to revist)
        const headerWrap = targetIFrame.document.querySelector('span[class="x32h"]');
        const headerWrapTitle = headerWrap.title;
        if (headerWrap) {
            headerWrap.setAttribute('style', 'text-wrap: nowrap;');
            headerWrap.innerText = headerWrapTitle;
        };
    } catch (error) {
        console.log('Header Wrap Not Found.');
    };

    try {
    const resultsTable = targetIFrame.document.querySelectorAll('div[id*="_ATp:table"]');
    if (resultsTable) {
        resultsTable.forEach(element => {
            const currentHeight = element.offsetHeight; // Get current height
            element.style.height = `${currentHeight + 10}px`; // Set new height with addition
        });
    };
    } catch (error) {
        console.log('Results Table Not Found.');
    };

    try {
    // // MCD's Req tables
    const mcdReqTables = targetIFrame.document.querySelectorAll('div[id*="AppTable:_ATp:"]');
    if (mcdReqTables) {
        mcdReqTables.forEach(element => {
            element.setAttribute('style', 'height: max-content');
        });
    };
    } catch (error) {
        console.log('MCD Req Tables Not Found.');
    };




    // Increases table height by 10px. Use with caution.
    // const tableHeight = targetIFrame.document.querySelectorAll('div[id*=":AT1:_ATp:table"]');
    // if (tableHeight) {
    //     const currentHeight = tableHeight.offsetHeight; // Get current height
    //     const newHeight = currentHeight + 10 + 'px'; // Add 10px to height with unit
    //     tableHeight.style.height = newHeight; // Set the new height
    //     tableHeight.forEach( element =>  element.style.cssText = newHeight);
    // };

    // Increase height of search results table by 10px USE WITH CAUTION


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

    return messageHolder;
}
