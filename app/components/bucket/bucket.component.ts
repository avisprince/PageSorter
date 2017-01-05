import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../models/Page';
import { Bucket } from '../../models/Bucket';

@Component({
	selector: 'bucket',
	templateUrl: 'app/components/bucket/bucket.component.html'
})
export class BucketComponent {
	@Input() pages: Page[];
	@Output() selectBucket = new EventEmitter();

    constructor(private bucket: Bucket){};

    bucketClick() {
        this.selectBucket.emit(this.bucket);
    }
}