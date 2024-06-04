
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

    constructor(message = "") {
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
    ***Overflow table scroll***
    ***Peroid end for payables*** =>
    ***Check view options drop-down***
    */

    // Holds alert message
    let messageHolder = "";
    let isFixed = false;

    // Target iFrame
    targetIFrame = window.top.document.querySelector('div > iframe[class="tutorial-practice__iframe"]').contentWindow;


    try {
        // Removes iFrame dots
        const iFrames = targetIFrame.document.querySelectorAll('[id="letznav-iframe-script"]');
        if (iFrames.length > 0) {
            iFrames.forEach(element => element.remove());
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nRemoved iFrame Dots';
            };
        };
    } catch (error) {
        console.log('Iframes not found: ');
    };

    try {
        // Removes iFrame box
        const boxFrames = targetIFrame.document.querySelectorAll('div[id="__af_Z_maskingframe"]');
        if (boxFrames.length > 0) {
            boxFrames.forEach(element => element.remove());
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nRemoved Box Frames';
            };
        };

    } catch (error) {
        console.log('Box Frames not found: ');
    };

    try {
        // Sets stlye attribute of Actions button
        const actionsButton = targetIFrame.document.querySelector('a[aria-describedby$="_afrdescBy"]');
        if (actionsButton) {
            actionsButton.setAttribute('style', 'font-size: 12px; font-weight: bold;');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Actions Button';
            };
        };

    } catch (error) {
        console.log('Actions Button Not Found.');
    };
    try {
        // Save and close button
        const saveAndCloseButtons = targetIFrame.document.querySelectorAll('a[aria-describedby*=":saveBtn"] > span');
        if (saveAndCloseButtons.length > 0) {
            saveAndCloseButtons.forEach(element => {
                element.style.cssText = 'font-size: 12px; font-weight: bold; color: white;';
                isFixed = true;
            });
            if (isFixed) {
                messageHolder += '\nFixed Save and Close Button';
            }
        }
    } catch (error) {
        console.log('Save and Close Button Not Found.');
    }

    try {
        // Save and close button
        const saveAndCloseButtons2 = targetIFrame.document.querySelectorAll('a[accesskey="S"] > span');
        if (saveAndCloseButtons2.length > 0) {
            saveAndCloseButtons2.forEach(element => {
                element.style.cssText = 'font-size: 12px; font-weight: bold; color: white;';
                isFixed = true;
            });
            if (isFixed) {
                messageHolder += '\nFixed Save and Close Button';
            }
        }
    } catch (error) {
        console.log('Save and Close Button Not Found.');
    }
    try {
        // Save and close button (Depreciated but still in DHL tutorials)
        // Was working now it's not. Need to revist ASAP
        const saveAndCloseButtonsDHL = targetIFrame.document.querySelectorAll('a[class="xtb"]').checkVisibility();
        if (saveAndCloseButtonsDHL.length > 0) {
            saveAndCloseButtonsDHL.forEach(element => {
                element.style.cssText = 'font-size: 12px; font-weight: bold;';
                isFixed = true;
                if (isFixed) {
                    messageHolder += '\nFixed Button Text Foramtting';
                }
            });

        };
    } catch (error) {
        console.log('Save and Close Button Not Found.');
    };

    try {
        // Text wrap fix for Save and Close buttons in dialogs (will need to be looked at. Was configured with old DHL tutorial)
        const textWrapButtons = targetIFrame.document.querySelectorAll('button[class="xxd p_AFTextOnly"]');
        if (textWrapButtons.length > 0) {
            textWrapButtons.forEach(element => {
                element.style.cssText = 'text-wrap: nowrap;';
                isFixed = true;
            });
            if (isFixed) {
                messageHolder += '\nFixed Text Wrap Button';
            }
        }
    } catch (error) {
        console.log('Text Wrap Button Not Found.');
    }
    try {
        //action and format and view dropdown text resize
        const viewDropDown = targetIFrame.document.querySelectorAll('a[class="xh7"]');
        if (viewDropDown.length > 0) {
            viewDropDown.forEach(element => element.style.cssText = 'font-size: 12px;')
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed View Drop Down Button';
            };
        };

    } catch (error) {
        console.log('View Drop Down Button Not Found.');
    };

    try {
        // Removes News and Announcement div
        const newsAndAnnouncments = targetIFrame.document.querySelector('div[id$=":r1j_id_2"]')
        if (newsAndAnnouncments) {
            newsAndAnnouncments.forEach(element => element.remove());
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nRemoved News and Announcments';
            };
        };

    } catch (error) {
        console.log('News and Announcments Not Found.');
    };

    try {
        // Finds all headers with the appropriate class and sets their width/max-width
        const headerWidth = targetIFrame.document.querySelectorAll('[id$="::_afrTtxt"] > div');
        if (headerWidth.length > 0) {
            headerWidth.forEach(element => element.style.cssText = 'width: fit-content; max-width: max-content;');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Guide Image Elipses';
            };
        };

    } catch (error) {
        console.log('Header Width Not Found.');
    }

    try {
        // Sets the Width of the Setup drop-down list (Setup and Maintenece landing page)
        const setupAndMaintenceDropDown = targetIFrame.document.querySelector(' ul[class*="x1r1"]')
        if (setupAndMaintenceDropDown) {
            setupAndMaintenceDropDown.setAttribute('style', 'width: 348px;');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Setup and Maintence Drop Down Guide Image';
            };
        }
    } catch (error) {
        console.log('Setup and Maintence Drop Down Not Found.');
    };

    try {
        // Sets the Width of the Inovice Actions (MCD ERP) drop-down list
        const mcdInvoiceActions = targetIFrame.document.querySelector('table[id$=":me1::ScrollContent"]')
        if (mcdInvoiceActions) {
            mcdInvoiceActions.setAttribute('style', 'width: 320px;');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Invoice Actions Drop Down';
            };
        };

    } catch (error) {
        console.log('Invoice Actions Drop Down Not Found.');
    };

    try {
        // Sets the width/heigh of the AFModalGlassPane to 5000x5000
        const glassPane = targetIFrame.document.querySelector('div[class="AFModalGlassPane"]');
        if (glassPane) {
            glassPane.setAttribute('style', 'width: 5000px; height: 5000px;');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Glass Pane';
            };
        }

    } catch (error) {
        console.log('Glass Pane Not Found.');
    };

    try {
        // Sets the overflow for the view/format buttons div to visisble
        const viewButton = targetIFrame.document.querySelectorAll('div[class="x6e"]')
        if (viewButton.length > 0) {
            viewButton.forEach(element => element.style.overflow = 'visible');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed View Button';
            };
        };

    } catch (error) {
        console.log('View Button Not Found.');
    };

    try {
        // MCD's Action Button (depreciated class) **Not working for some reason??***
        const mcdActionsButton = targetIFrame.document.querySelector('span[class="xri"]');
        if (mcdActionsButton) {
            mcdActionsButton.setAttribute('style', 'font-size: 12px; font-weight: bold;');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Button Text Formatting';
            }
        };
    } catch (error) {
        console.log('MCD Actions Button Not Found.');
    };

    try {
        // Adjust spacing between divs so buttons don't get smushed
        const plusButton = targetIFrame.document.querySelectorAll('div[id$=":AT1:_ATp:ATtb1"]')
        if (plusButton.length > 0) {
            plusButton.forEach(element => element.style.cssText = 'left: 8px;');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Add Button';
            };
        };

    } catch (error) {
        console.log('Plus Button Not Found.');
    };

    try {
        // Removes Sticky Headers (Just for MCDs will revist)
        const mcDStickyHeaders = targetIFrame.document.querySelector('div[id$=":cupanel1:SPpsl2"]');
        if (mcDStickyHeaders) {
            mcDStickyHeaders.classList.remove('sticky-header');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Sticky Headers';
            };
        };

    } catch (error) {
        console.log('Sticky Headers Not Found.');
    };

    try {
        // MCD Hidden Headers
        const mcDHiddenHeaders = targetIFrame.document.querySelector('div[id$="ap1:SPpsl3::m"]');
        if (mcDHiddenHeaders) {
            mcDHiddenHeaders.style.overflowX = 'visible';
            mcDHiddenHeaders.style.height = '35px';
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Hidden Headers';
            };
        };

    } catch (error) {
        console.log('Hidden Headers Not Found.');
    };

    // MCD Grey Actions Button - Might work for other applications
    try {
        let mcdActionsButton2;
        const spans = targetIFrame.document.querySelectorAll('span');
        spans.forEach(span => {
            if (span.textContent === "Actions") {
                mcdActionsButton2 = span;
            }
        });
        if (mcdActionsButton2.length > 0) {
            mcdActionsButton2.setAttribute('style', 'font-size: 12px; font-weight: bold;');
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Grey Button Formatting';
            }
        };
    } catch (error) {
        console.error('An error occurred:', error);
    }

    try {
        // Removes need help widget
        const widgetButton = targetIFrame.document.querySelector('#letznav-frame-script');
        if (widgetButton) {
            widgetButton.parentNode.removeChild(widgetButton);
            messageHolder += '\nRemoved Need Help Widget';
        };
    } catch (error) {
        console.log('Need Help Widget Not Found.');
    }

    try {
        const setupAndMaintenceWidth = targetIFrame.document.querySelector('div[id$=":soc2::popup-container"]');
        if (setupAndMaintenceWidth) {
            setupAndMaintenceWidth.style.width = '348px';
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nFixed Setup and Maintence Width';
            };
        };
    } catch (error) {
        console.log('Setup and Maintence Width Not Found.');
    };

    try {
        // Format the text of the span
        const actionSpans = Array.from(targetIFrame.document.querySelectorAll('span')).filter(span => span.textContent === "Actions");
        if (actionSpans.length > 0) {
            actionSpans.forEach(span => {
                span.style.cssText = 'font-size: 12px; font-weight: bold;';
                isFixed = true;
            });
            if (isFixed) {
                messageHolder += '\nFixed Scheduled Maintenance Actions Button Text';
            }
        };
    } catch (error) {
        console.error('An error occurred:', error);
    }

    try {
        // Removes need help widget
        const needHelpWidget = targetIFrame.document.querySelector('.letznav-banner-container');
        if (needHelpWidget) {
            needHelpWidget.parentNode.removeChild(needHelpWidget);
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nRemoved Need Help Widget';
            }
        }
    } catch (error) {
        console.log('Need Help Widget Not Found.');
    }

    // try {
    //     // MCD ERP Team Members table cutoff fix
    //     const MCDTeamMembersTable = targetIFrame.document.querySelector('div[id$=":psl1::t"]');
    //     if (MCDTeamMembersTable) {
    //         MCDTeamMembersTable.style.overflow = 'visible';
    //         isFixed = true;
    //         if (isFixed) {
    //             messageHolder += '\nFixed MCD Team Members Table';
    //         };
    //     };
    // } catch (error) {
    //     console.log('MCD Team Members Table Not Found.');
    // };

    try {
        // Text wrap and elipses coded for header text (Works for MCD's need to revist)
        const headerWrap = targetIFrame.document.querySelector('span[class="x32h"]');
        const headerWrapTitle = headerWrap.title;
        if (headerWrap) {
            headerWrap.setAttribute('style', 'text-wrap: nowrap;');
            headerWrap.innerText = headerWrapTitle;
            if (isFixed) {
                messageHolder += '\nFixed Header Wrap';
            }
        };
    } catch (error) {
        console.log('Header Wrap Not Found.');
    };


    try {
        // Removes Refresh date banner
        const refreshDateBanner = targetIFrame.document.querySelector('table[id="_FOpt1:_UISpbl1"]');
        if (refreshDateBanner) {
            refreshDateBanner.remove();
            isFixed = true;
            if (isFixed) {
                messageHolder += '\nRemoved Refresh Date Banner';
            };
        };
    } catch (error) {
        console.log('Refresh Date Banner Not Found.');
    };


    try {
        // MCD's Req tables
        const mcdReqTables = targetIFrame.document.querySelector('div[id*="AppTable:_ATp:"]');
        if (mcdReqTables.length > 0) {
            mcdReqTables.forEach(element => {
                element.style.cssText = 'height: fit-content; overflow-x: scroll; width: 100%;';
                isFixed = true;
            });
            if (isFixed) {
                messageHolder += '\nFixed MCD Req Tables';
            }
        }
    } catch (error) {
        console.log('MCD Req Tables Not Found.');
    }

    try {
        // MCD's Project Tables
        const mcdProjectTables = targetIFrame.document.querySelectorAll('div[id$="::_ahCt"] > div');
        if (mcdProjectTable.length > 0) {
            mcdProjectTables.forEach(element => {
                element.style.cssText = 'height: fit-content; overflow-x: scroll; width: 100%;';
                isFixed = true;
            });
            if (isFixed) {
                messageHolder += '\nFixed MCD Project Tables';
            }
        }
    } catch (error) {
        console.log('MCD Project Tables Not Found.');
    }

    try {
        // Fixes Funcational Areas Text
        const functionalAreasDiv = targetIFrame.document.querySelector('div[title="Functional Areas"]');
        if (functionalAreasDiv) {
            // Select all child tables of the div
            const childTables = functionalAreasDiv.querySelectorAll('table');
            if (childTables.length > 0) {
                childTables.forEach(table => {
                    table.style.cssText = 'font-size: 13px; color: #0080d3;'
                    table.style.fontFamily = 'Helvetica';
                    isFixed = true;
                });
                if (isFixed) {
                    messageHolder += '\nFixed Functional Areas Text';
                }
            }
        }
    } catch (error) {
        console.log('An error occurred:', error);
    }

    if (isFixed) {
        return messageHolder;
    }

    if (!isFixed) {
        return 'No issues found.';
    };

}
