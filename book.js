const api = require('./api.js');

console.log(api);

describe('angularjs homepage todo list', function() {

it('should check ng-click', function() {
  browser.get('http://app.uat.aggregion.com');
  beforeEach(function (done) {
window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
setTimeout(function () {
console.log('inside timeout');
done();
}, 10000);
});
  

 


//простая авторизация  
function login(login,password){
element(by.css('[name="login"]')).sendKeys(login);
element(by.css('[name="password"]')).sendKeys(password);
element(by.css('[translate="LOGIN_SUBMIT"]')).click();
}

login('hipuhedo@kumail8.info', 123);


//открывает браузер на всю ширину, иначе некоторые элементы будут не видны - надо расскрывать 
//меню
browser.driver.manage().window().maximize();


browser.sleep(1000);





element(by.css('button[ng-click="$mdMenu.open($event)"]')).click();
element(by.css('button[ng-click="selector.changeAccount(a)"]')).click();
//element.all(by.repeater('account in dialog.filteredList track by account.id')).get(0).click();


//var now = new Date(milliseconds);

element(by.css('[translate="СONTENT_MANAGEMENT"]')).click();
element(by.css('[translate="CATALOG"]')).click();

var time = new Date();

element(by.css('[translate="ADD_CATALOG_ITEM"]')).click();

element(by.model("$ctrl.catalogItem.title.default")).sendKeys(time.toISOString());
element(by.model("$ctrl.catalogItem.shortTitle")).sendKeys("short item");
element(by.model("$ctrl.catalogItem.description.default")).sendKeys("desc ription");
//element(by.id('radio_89')).all(by.tagName('md-radio-button')).get(1).click();
//element(by.css('[value="catalog"]')).click();
element(by.css('[translate="SAVE_AND_ADD_FILES"]')).click();
browser.sleep(2000);
element(by.css('button[ng-click="$ctrl.showAddFilesDialog($event, $ctrl)"]')).click();


element(by.model("dialog.version")).sendKeys("1.0");
element.all(by.repeater('i in vm.helper.list')).get(0).click();


//expect(element(by.model('value1')).isSelected()).toBeTruthy();






 
browser.sleep(10000);
 

  
});




});

