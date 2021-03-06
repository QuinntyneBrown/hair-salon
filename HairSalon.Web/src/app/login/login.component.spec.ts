import { LoginComponent } from './login.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('LoginComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(LoginComponent).then(fixture => {
                expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create LoginComponent');
            });
        })));    
});
