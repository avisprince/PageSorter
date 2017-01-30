import { Inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface Page {
    id: number;
    thumbnail: SafeUrl;
}

export class PageBuilder {
    constructor(@Inject(DomSanitizer) private sanitizer: DomSanitizer) {}

    buildPage(id: number, imageData: string): Page {
        return {
            id: id,
            thumbnail: this.sanitizer.bypassSecurityTrustUrl("data:image/png;base64," + imageData)
        }
    }
}