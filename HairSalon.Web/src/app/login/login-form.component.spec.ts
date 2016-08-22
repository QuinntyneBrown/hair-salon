import { LoginFormComponent } from './login-form.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('LoginFormComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(LoginFormComponent).then(fixture => {
                expect(fixture.componentInstance instanceof LoginFormComponent).toBe(true, 'should create LoginFormComponent');
            });
        })));    
});
