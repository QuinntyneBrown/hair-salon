import { ServicesComponent } from './services.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('ServicesComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(ServicesComponent).then(fixture => {
                expect(fixture.componentInstance instanceof ServicesComponent).toBe(true, 'should create ServicesComponent');
            });
        })));    
});
