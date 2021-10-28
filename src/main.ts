import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { MainModule } from "./app/modules/main.module";

const platform = platformBrowserDynamic();

platform.bootstrapModule(MainModule);