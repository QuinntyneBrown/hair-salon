import { PhotoGalleryComponent } from './photo-gallery.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('PhotoGalleryComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(PhotoGalleryComponent).then(fixture => {
                expect(fixture.componentInstance instanceof PhotoGalleryComponent).toBe(true, 'should create PhotoGalleryComponent');
            });
        })));    
});
