import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

console.log('main.ts is loading...');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    console.log('Bootstrap SUCCESS!');
  })
  .catch((err: any) => {
    console.error('Bootstrap ERROR:', err);
    alert('Bootstrap failed - check console');
  });