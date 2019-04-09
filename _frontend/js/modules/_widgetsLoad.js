

export class WidgetsLoad {


    widgetsLoad(initItem, widgets, utils, allNodes) {
        //this.initItem("[id^=static-start-of-id]", this.widgets.myWidget, {myDefaultParameter1: "myValue", myDefaultParameter2: "myValue"});

        this.initItem = initItem;
        this.widgets = widgets;
        this.utils = utils;
        this.allNodes = allNodes;
        
            //Film list
                
            this.initItem("[id^=vista-film-list]", this.widgets.filmList, {
                events: {
                    onFilmClicked: (film) => {
                        console.log(film);
                    }
                },
                test: {
                    test1: "test1string",
                    test2: "test2string"
                }
            });

            //Site List
            this.initItem("[id^=vista-site-list]", this.widgets.siteList, {

            });

            // Customer Details Form
            this.initItem("[id^=vista-customer-details-form]", this.widgets.customerDetailsForm, {

            });

            // Gift Card Checker
            this.initItem("[id^=vista-gift-card-checker]", this.widgets.giftCardChecker, {

            });

            // Sign In
            this.initItem("[id^=vista-sign-in]", this.widgets.signIn, {

            });

            // Site Picker
            this.initItem("[id^=vista-site-picker]", this.widgets.sitePicker, {

            });

            // Item Picker
            this.initItem("[id^=vista-item-picker]", this.widgets.itemPicker, {

            });

            //Customer Details Form
            //this.initItem("[id^=vista-customer-details-form]", this.widgets.customerDetailsForm);

    }
}