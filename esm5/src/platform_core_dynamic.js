/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { COMPILER_OPTIONS, CompilerFactory, createPlatformFactory, platformCore } from '@angular/core';
import { JitCompilerFactory } from './compiler_factory';
/** *
 * A platform that included corePlatform and the compiler.
 *
 * \@publicApi
  @type {?} */
export var platformCoreDynamic = createPlatformFactory(platformCore, 'coreDynamic', [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
]);
//# sourceMappingURL=platform_core_dynamic.js.map