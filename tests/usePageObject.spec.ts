import {expect, test} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})

test('navigate to form page', async({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage() 
})

test('parametrized methods', async({page}) => {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test1@gmail.com', 'Welcome1', 'Option 2')
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox('John Smith', 'test2@gmail.com', true)
    
    await pm.navigateTo().datepickerPage()
    await pm.onDatePickerPage().selectCommonDatepickerDateFromToday(20)
    await pm.onDatePickerPage().selectDatepickerWithRangeFromToday(10, 12)
})