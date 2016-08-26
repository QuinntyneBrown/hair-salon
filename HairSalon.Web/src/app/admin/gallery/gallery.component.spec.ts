import { GalleryComponent } from './gallery.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('GalleryComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(GalleryComponent).then(fixture => {
                expect(fixture.componentInstance instanceof GalleryComponent).toBe(true, 'should create GalleryComponent');
            });
        })));    
});
