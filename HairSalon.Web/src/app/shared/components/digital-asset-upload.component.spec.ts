import { DigitalAssetUploadComponent } from './digital-asset-upload.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('DigitalAssetUploadComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(DigitalAssetUploadComponent).then(fixture => {
                expect(fixture.componentInstance instanceof DigitalAssetUploadComponent).toBe(true, 'should create DigitalAssetUploadComponent');
            });
        })));    
});
