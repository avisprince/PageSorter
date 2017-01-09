import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../../models/Page';
import { Bucket } from '../../models/Bucket';

@Component({
	selector: 'bucket',
	templateUrl: 'app/components/bucket/bucket.component.html',
	styleUrls: ['app/components/bucket/bucket.component.less'],
})
export class BucketComponent {
	@Input() bucket: Bucket;
}