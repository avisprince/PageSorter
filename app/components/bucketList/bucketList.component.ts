import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bucket } from '../../models/Bucket';

@Component({
	selector: 'bucketList',
	templateUrl: 'app/components/bucketList/bucketList.component.html'
})
export class BucketListComponent {
    @Input() buckets: Bucket[];
	@Output() selectBucket = new EventEmitter();
}