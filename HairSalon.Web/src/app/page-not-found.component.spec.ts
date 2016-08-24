import { PageNotFoundComponent } from './page-not-found.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('PageNotFoundComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(PageNotFoundComponent).then(fixture => {
                expect(fixture.componentInstance instanceof PageNotFoundComponent).toBe(true, 'should create PageNotFoundComponent');
            });
        })));    
});
