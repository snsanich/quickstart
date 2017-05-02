import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../docs/src/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';
// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
