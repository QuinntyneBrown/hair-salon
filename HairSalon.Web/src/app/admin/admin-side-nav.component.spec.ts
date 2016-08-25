import { AdminSideNavComponent } from './admin-side-nav.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('AdminSideNavComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AdminSideNavComponent).then(fixture => {
                expect(fixture.componentInstance instanceof AdminSideNavComponent).toBe(true, 'should create AdminSideNavComponent');
            });
        })));    
});
