const {chromium} = require('playwright');
const moment = require("moment");

function getCalendarDay(currentDate) {

    let weekStart = currentDate.clone().startOf('isoWeek');
    let weekEnd = currentDate.clone().endOf('isoWeek');
    return "S" + weekStart.isoWeek() + " du " + weekStart.format("DD") + " " + weekStart.format("MMM") + " au " + weekEnd.format("DD") + " " + weekEnd.format("MMM") + ""
}

async function takePicture(page, date) {
    await page.click('text=' + getCalendarDay(date));
    await page.waitForTimeout(500)

    let fileName = "./data/planning_" + (date).isoWeek() + "_" + date.year();
    await page.screenshot({path: fileName + ".png", format: 'A4'})

    await require('sharp')(fileName + ".png")
        .extract({left: 255, top: 5, width: 1900 - 255, height: 995})
        .toFile(fileName + "_.png", function (err) {
            if (err) console.log(err);
            require('fs').unlinkSync(fileName + ".png")
            require('fs').renameSync(fileName + "_.png", fileName + ".png")
        })
}

(async () => {
    const moment = require("moment")
    moment.locale("fr")

    const browser = await chromium.launch({
        // headless: false,
    });
    const context = await browser.newContext({
        viewport: {width: 1920, height: 1080}
    });

    // Open new page
    const page = await context.newPage();

    await page.goto('https://edt.univ-littoral.fr/public/cgu-calais');
    await page.waitForSelector("#x-auto-10")

    // Click [aria-label="Formations"] >> :nth-match(img, 2)
    await page.click('[aria-label="Formations"] >> :nth-match(img, 2)');

    // Click [aria-label="CGU Calais"] >> :nth-match(img, 2)
    await page.click('[aria-label="CGU Calais"] >> :nth-match(img, 2)');

    // Click [aria-label="MASTER 1"] >> :nth-match(img, 2)
    await page.click('[aria-label="MASTER 1"] >> :nth-match(img, 2)');

    // Click [aria-label="M1 STS INFORMATIQUE/WEB SCIENCES DES DONNEES A CALAIS"] >> :nth-match(img, 2)
    await page.click('[aria-label="M1 STS INFORMATIQUE/WEB SCIENCES DES DONNEES A CALAIS"] >> :nth-match(img, 2)');

    // Click text=Semestre 1
    await page.click('text=Semestre 1');

    await page.waitForTimeout(500)
    // Click text=Semestre 2
    await page.click('text=Semestre 2', {
        modifiers: ['Control']
    });

    await page.waitForTimeout(500)
    await page.click('button[role="button"]:has-text("Dimanche")', {
        modifiers: ['Control']
    });

    await page.waitForTimeout(500)
    await page.click('button[role="button"]:has-text("Samedi")', {
        modifiers: ['Control']
    });

    await page.waitForTimeout(500)
    await takePicture(page, moment())
    await takePicture(page, moment().add("1", "weeks"))


    await context.close();
    await browser.close();
})();