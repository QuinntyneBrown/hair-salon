import { AdminComponent } from './admin.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('AdminComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(AdminComponent).then(fixture => {
                expect(fixture.componentInstance instanceof AdminComponent).toBe(true, 'should create AdminComponent');
            });
        })));    
});
