// @ts-nocheck
/*
*
* The first file of the module
*
* Description: Create a date picker
* Author: Renato Souza
* Version: 1.0.0
* ata: 21/02/2019
*
*
*/

const main = {};

main.value = '';
main.eventValue = new Event('build');
/**
* Set css file in head.
* Add the file style-picker.css and google fonts Barlow.
* @return void 
*/
main.headCss = () => {
    main.existClassView((exist) => {
        window.document.head.innerHTML += `<link 
        href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet">`;

    });
};

/**
 * 
 * Open modal after click in Id data dial-pad-picker
 * Verify if modal is not open, if not, open.
 * @return void
 * 
 */
main.openModal = () => {

    // Verify if the id dial-pad-picker exist in the view.
    if (document.getElementById('dial-pad-picker')) {
        // If exist, listen click event
        document.getElementById('dial-pad-picker')
            .addEventListener('click', (e) => {
                e.preventDefault();


                // If modal is not opened.
                if (!document.getElementById('modal1-picker')) {
                    // Catch template literal and show in the view.
                    main.modalHtml((modal) => {
                        document.body.innerHTML += modal;

                        if (document.getElementById('modal1-picker')) {
                            main.container();
                            main.effectClick();
                            main.returnSelected();
                            main.closeModal();
                        }
                    });
                }
            });
    }
};


/**
 * 
 * 
 * Close Modal by click in with Id cancel-btn-dial-pad-picker .
 * @return void
 * 
 */
main.closeModal = () => {
    // Verify if the id modal1 exist in the view
    if (document.getElementById('modal1-picker')) {
        // If exist, listen click event
        document.getElementById('cancel-btn-dial-pad-picker')
            .addEventListener('click', (e) => {
                e.preventDefault();

                main.modalHtml((modal) => {
                    if (document.getElementById('modal1-picker')) {
                        const body = document.body;
                        const modal = document.getElementById('modal1-picker');
                        body.removeChild(modal);
                    }
                });
            });

        main.openModal();
    }
};


/**
 * 
 * 
 *  Return date selected by user.
 * 
 *  
 *  * 
 */

main.returnSelected = () => {
    // Verify if the id modal1 exist in the view
    if (document.getElementById('modal1-picker')) {
        // If exist, listen click event
        const elemOkDial = document.getElementById('ok-btn-dial-pad-picker')
            .addEventListener('click', (e) => {
                e.preventDefault();

                // Get value in all top algarisms
                const algarism = document.getElementsByClassName('digit');
                const algarismArray = [];

                for (const digit of algarism) {
                    algarismArray.push(digit.textContent);
                }

                const [hour1, hour2, , minutes1, minutes2] = algarismArray;

                // Close modal and send value
                document.getElementById('modal1-picker').style.display = 'none';

                // Remove model of the body
                const body = document.body;
                const modal = document.getElementById('modal1-picker');
                body.removeChild(modal);

                main.value = `${hour1}${hour2}:${minutes1}${minutes2}`;
                main.eventValue.eventValue(main.value)
            });
            
    }
};

main.emitter = (eventConfig) => {
    main.eventValue = eventConfig
}


/**
 * 
 * 
 *  Return value selected by user.
 * 
 *  @return {string}
 * 
 */
main.returnValue = () => {

    return value;

}


/**
 * 
 * 
 *  Create modal html in template literals.
 * 
 * 
 * @callback {template literal}
 * 
 * 
 */
main.modalHtml = (callback) => {
    const modal = `<div id="modal1-picker" class="modal1-picker">
    <div class="modal-content-picker">


        <div id="catch-hour-picker">
            <div id="first" class="digit">1</div>
            <div id="second" class="digit">5</div>
            <div class="digit">:</div>
            <div id="third" class="digit">2</div>
            <div id="fourth"  class="digit">8</div>
        </div>

        <table id="table-picker">
            <tbody id="tbody-picker" >
                <tr>
                    <td>1</td>
                    <td >2</td>
                    <td >3</td>
                    <td >:15</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>:30</td>
                </tr>
                <tr>
                    <td >7</td>
                    <td >8</td>
                    <td >9</td>
                    <td >:45</td>
                </tr>
                <tr>
                    <td >-1h</td>
                    <td >0</td>
                    <td id="td-more" >+1h</td>
                    <td >:00</td>
                </tr>
            </tbody>                  
        </table> 
        <div id="group-btn-picker">  
        <button id="cancel-btn-dial-pad-picker"
        class="dial-pad-picker-btn">CANCEL</button>
        <button id="ok-btn-dial-pad-picker" 
        class="dial-pad-picker-btn">OK</button></div>     
    </div>
    </div>`;


    callback(modal);
};

/**
 * 
 * 
 * 
 * Verify if class css tbody-picker exist in the view.
 * 
 * @callback {boolean}
 */
main.existClassView = (callback) => {
    if (document.getElementById('tbody-picker')) {
        callback(true);
    } else {
        callback(false);
    }
};


/**
 * 
 * 
 * Initializing defaul behaviour.
 * intialize styles.
 * Initialize function to set time.
 * 
 * @return void
 * 
 */
main.default = () => {
    if (document.getElementsByClassName('digit')[0]) {
        document.getElementsByClassName('digit')[0]
            .style.backgroundColor = ' #d0d0d08a';

        // set hour
        main.getTime();
    }
};

/**
 * 
 * 
 * 
 * Active algarism selected.
 * 
 * @param {number}
 * @return void
 * 
 */

main.activedAlgarism = (algActived) => {
    document.getElementsByClassName('digit')[algActived]
        .style.backgroundColor = ' #d0d0d08a';


    for (let i = 0; i < 5; i++) {
        if (i != algActived) {
            document.getElementsByClassName('digit')[i]
                .style.backgroundColor = '#F2F2F2';
        }
    }
};

/**
 * 
 * 
 * Get time and correct minutes the one algarism.
 * Format number if hour has only one digit.
 * Format minutes if minutes has only one digit.
 * Set hour and minutes int the view.
 * 
 * 
 * @return void
 */
main.getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();


    document.getElementsByClassName('digit')[0]
        .textContent = hour.toString()[0]; // 'h'0:00
    document.getElementsByClassName('digit')[1]
        .textContent = hour.toString()[1]; // 0'h':00


    if (!hour.toString()[1]) {
        document.getElementsByClassName('digit')[0]
            .textContent = '0'; // 00:'m'0
        document.getElementsByClassName('digit')[1]
            .textContent = hour.toString()[0]; // 00:0'm'
    }


    if (!minutes.toString()[1]) {
        document.getElementsByClassName('digit')[3]
            .textContent = '0'; // 00:'m'0
        document.getElementsByClassName('digit')[4]
            .textContent = minutes.toString()[0]; // 00:0'm'
    } else {
        document.getElementsByClassName('digit')[3]
            .textContent = minutes.toString()[0]; // 00:'m'0
        document.getElementsByClassName('digit')[4]
            .textContent = minutes.toString()[1]; // 00:0'm'
    }
};

/**
 * 
 * 
 * 
 * Listen click event in the class tbody-picker
 * 
 * 
 * @callback {number} clicked by user
 */
main.clickEvent = (callback) => {
    document.getElementById('tbody-picker')
        .addEventListener('click', (e) => {
            e.preventDefault();

            callback(e.target.outerText);
        });
};


/**
 * 
 * 
 * Create efect in algarism clicked
 * 
 * 
 * @return void
 */
main.effectClick = () => {
    const algClicked = document.getElementsByTagName('td');
    main.clickEvent((numbClicked) => {
        for (let i = 0; i < algClicked.length; i++) {
            if (algClicked[i].textContent == numbClicked) {
                algClicked[i].style.backgroundColor = '#adabab73';

                setTimeout(() => {
                    algClicked[i].style.backgroundColor = 'white';
                }, 100);
            }
        }
    });
};

/**
 * 
 * Receive the first top algarism.
 * Catch the number clicked and only accept the numbers 1,2,3.
 * @param {number}
 * 
 * 
 * @callback {boolean}
 */
main.firstAlgarism = (numberClicked, callback) => {
    if (numberClicked == 0 || numberClicked == 1 || numberClicked == 2) {
        document.getElementsByClassName('digit')[0]
            .textContent = numberClicked;


        main.activedAlgarism(1);
    } else {
        callback(true); // Return true if user clicked in algarrism invalid
    }
};

/**
 * 
 * Receive the first top algarism.
 * Catch the number clicked, if the first number is equal 0 or 1, 
 * accept numbers. 
 * between 0 and 9. If the first number is equal 2, 
 * accept numbers entre 0 and 3.
 * 
 * @param {number} 
 * 
 * @callback {boolean}
 */
main.secondAlgarism = (numberClicked, callback) => {
    const firstAlgarism = document.getElementsByClassName('digit')[0]
        .textContent;
    const numberAccept = [];
    const numberAccept2 = [0, 1, 2, 3];


    // Creating array of 0 - 9
    for (let i = 0; i < 10; i++) {
        numberAccept.push(i);
    }


    // Verify if number clicked is in array
    if (firstAlgarism == 0 && numberAccept
        .indexOf(parseInt(numberClicked)) > -1) {
        document.getElementsByClassName('digit')[1]
            .textContent = numberClicked;

        main.activedAlgarism(3);
    }

    // Verify if number clicked is in array
    if (firstAlgarism == 1 && numberAccept
        .indexOf(parseInt(numberClicked)) > -1) {
        document.getElementsByClassName('digit')[1]
            .textContent = numberClicked;

        main.activedAlgarism(3);
    }

    // Verify if number clicked is in array
    if (firstAlgarism == 2 && numberAccept2
        .indexOf(parseInt(numberClicked)) > -1) {
        document.getElementsByClassName('digit')[1]
            .textContent = numberClicked;

        main.activedAlgarism(3);
    }


    if (numberClicked == ':15' && numberClicked == ':30'
        && numberClicked == ':45'
        && numberClicked == ':00' && numberClicked == '+1h'
        && nu && numberClicked == '-1h') {
        callback(true);
    }
};

/**
 * 
 * Receive the third top algarism.
 * Catch the number clicked and only accept the numbers 1,2,3,4,5.
 * 
 * @parm {number}
 * 
 * @callback {boolean}
 * 
 */

main.thirdAlgarism = (numberClicked, callback) => {
    const numberAccept2 = ['0', '1', '2', '3', '4', '5'];

    // Verify if number clicked is in array
    if (numberAccept2.indexOf(numberClicked) > -1) {
        document.getElementsByClassName('digit')[3]
            .textContent = numberClicked;

        main.activedAlgarism(4);
    } else {
        callback(true); // Return true if user clicked in algarrism invalid
    }
};



/**
 * 
 * Receive the fourth top algarism.
 * Catch the number clicked, accept numbers between 0 and 9.
 * 
 * @param {number} 
 * 
 *@callback {boolean}
 */
main.fourthAlgarism = (numberClicked, callback) => {
    const numberAccept = [];

    // Creating array of 0 - 9
    for (let i = 0; i < 10; i++) {
        numberAccept.push(i);
    }


    // Verify if number clicked is in array
    if (numberAccept.indexOf(parseInt(numberClicked)) > -1) {
        document.getElementsByClassName('digit')[4]
            .textContent = numberClicked;
        main.activedAlgarism(0);
    } else {
        callback(true); // Return true if user clicked in algarrism invalid
    }
};


/**
 * 
 * Receive time interval :15 :30 :45 :00.
 * Change number in top algarism.
 * 
 * @param {number} 
 * 
 * @callback {boolean}
 * 
 */

// Add time interval  
main.intervals = (numberClicked, callback) => {
    if (numberClicked == ':15') {
        document.getElementsByClassName('digit')[3].textContent = 1;
        document.getElementsByClassName('digit')[4].textContent = 5;
        main.activedAlgarism(0);
        callback(true);
    }

    if (numberClicked == ':30') {
        document.getElementsByClassName('digit')[3].textContent = 3;
        document.getElementsByClassName('digit')[4].textContent = 0;
        main.activedAlgarism(0);

        callback(true);
    }

    if (numberClicked == ':45') {
        document.getElementsByClassName('digit')[3].textContent = 4;
        document.getElementsByClassName('digit')[4].textContent = 5;
        callback(true);
        main.activedAlgarism(0);
    }

    if (numberClicked == ':00') {
        document.getElementsByClassName('digit')[3].textContent = 0;
        document.getElementsByClassName('digit')[4].textContent = 0;
        main.activedAlgarism(0);
        callback(true);
    }
};

/**
 * 
 * Sum one hour in the top algarism selected.
 * 
 * @param {number} 
 * 
 * @callback {boolean}
 * 
 * 
 */
main.sumNumber = (numbClicked, callback) => {
    const firstAlg = document.getElementsByClassName('digit')[0]
        .textContent;
    const secondAlg = document.getElementsByClassName('digit')[1]
        .textContent;
    const digitParsed = `${firstAlg}${secondAlg}`;
    const digInt = parseInt(digitParsed) + 1;


    if (numbClicked == '+1h' && digInt >= 9 && digInt < 24) {
        document.getElementsByClassName('digit')[0]
            .textContent = digInt.toString()[0];
        document.getElementsByClassName('digit')[1]
            .textContent = digInt.toString()[1];

        callback(true);
    }

    if (numbClicked == '+1h' && digInt <= 9) {
        document.getElementsByClassName('digit')[0].
            textContent = 0;
        document.getElementsByClassName('digit')[1].
            textContent = digInt.toString()[0];

        callback(true);
    }
};

/**
 * 
 * Substrct one hour in the top algarism selected.
 * 
 * @param {number} 
 * 
 * @callback {boolean}
 * 
 * 
 */
main.subtracNumber = (numbClicked, callback) => {
    const firstAlg = document.getElementsByClassName('digit')[0]
        .textContent;
    const secondAlg = document.getElementsByClassName('digit')[1]
        .textContent;
    const digitParsed = `${firstAlg}${secondAlg}`;
    const digInt = parseInt(digitParsed) - 1;


    if (numbClicked == '-1h' && digInt >= 0) {
        document.getElementsByClassName('digit')[0]
            .textContent = digInt.toString()[0];
        document.getElementsByClassName('digit')[1]
            .textContent = digInt.toString()[1];

        if (!digInt.toString()[1]) {
            document.getElementsByClassName('digit')[0].textContent = 0;
            document.getElementsByClassName('digit')[1]
                .textContent = digInt.toString()[0];
        }

        callback(true);
    }
};



/**
 * 
 * 
 * Verify if class css name digit exist.
 * 
 * @callback {boolean}
 * 
 */
main.ifExistClassTopAlgarism = (callback) => {
    if (document.getElementsByClassName('digit')) {
        callback(true);
    } else {
        callback(false);
    }
};


/**
 * 
 * 
 * Listen event click in top algarisms.
 * 
 * 
 * @callback {object}
 * 
 */
main.listenEventClickTopAlgarism = (callback) => {
    const elemDigit = document.getElementsByClassName('digit');

    for (let i = 0; i < elemDigit.length; i++) {
        elemDigit[i].addEventListener('click', (e) => {
            e.preventDefault();

            const eventObject = {
                'idElement': e.target.id,
                'outText': e.target.outerText,
            };

            callback(eventObject);
        });
    }
};

/**
 * 
 * Change color is algarism is activate
 * 
 * @param {string}
 * 
 * 
 * @return void
 */

main.activedAlgarismByIdTopAlgarism = (algActivedId) => {
    const idArray = ['first', 'second', 'third', 'fourth'];

    document.getElementById(algActivedId).style.backgroundColor = '#d0d0d08a';

    for (const id of idArray) {
        if (id != algActivedId) {
            document.getElementById(id).style.backgroundColor = '#F2F2F2';
        }
    }
};

/**
 * 
 * 
 * 
 * Listen click event in top algarisms
 *  
 * 
 * @return void
 */
// Container click top algarism
main.clickTopAlgarism = (callback) => {
    // verifying if class css exist
    main.ifExistClassTopAlgarism((classExist) => {
        if (classExist) {
            // Listening algarism top clicked
            main.listenEventClickTopAlgarism((eventObject) => {
                main.activedAlgarismByIdTopAlgarism(eventObject.idElement);

                callback(eventObject.idElement);
            });
        }
    });
};

/**
 * 
 * 
 * 
 * Container main
 * 
 * @return void
 * 
 * 
 */
main.container = function() {
    let actived = 0;

    // Behaviour initial, cheange color of the first algarism
    main.default();

    // if class tbody-picker  exist in the view continue...
    main.existClassView(function(res) {
        if (res) {
            // Initialize event click top algarism, if activate top algarism
            main.clickTopAlgarism((firstEvent) => {
                if (firstEvent == 'first') {
                    actived = 0;
                }


                if (firstEvent == 'second') {
                    actived = 1;
                }

                if (firstEvent == 'third') {
                    actived = 2;
                }

                if (firstEvent == 'fourth') {
                    actived = 3;
                }
            });


            // Propagating Click Event
            main.clickEvent((numbClicked) => {
                actived++;

                if (actived == 1) {
                    main.firstAlgarism(numbClicked, (e) => {
                        if (e) {
                            actived--;
                        }
                    });
                }
                if (actived == 2) {
                    main.secondAlgarism(numbClicked, (e) => {
                        if (e) {
                            actived--;
                        }
                    });
                }

                if (actived == 3) {
                    main.thirdAlgarism(numbClicked, (e) => {
                        if (e) {
                            actived--;
                        }
                    });
                }

                if (actived == 4) {
                    main.fourthAlgarism(numbClicked, (e) => {
                        if (e) {
                            actived--;
                        }
                    });
                }

                if (actived == 4) {
                    actived = 0;
                }


                main.intervals(numbClicked, (e) => {
                    actived = 0;
                });


                main.sumNumber(numbClicked, (e) => {
                    actived = 0;
                });


                main.subtracNumber(numbClicked, (e) => {
                    actived = 0;
                });
            });
        } else {
            console.log('The class tbody-picker does not exist in the view ');
        }
    });
};

main.getValue = () => {
    return main.value;
} 

/**
 * 
 * 
 * Initializing Module
 * 
 * 
 * 
 */
main.init = function() {
    main.headCss();
    main.openModal();
};

/**
 * 
 *  Call the init processes after the window loads
 * 
 */
window.onload = function() {
    console.log('teste');
    
    main.init();

     
};
