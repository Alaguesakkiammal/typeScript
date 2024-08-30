"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const typeorm_1 = require("typeorm");
let user = class user {
};
exports.user = user;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], user.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title_name', type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], user.prototype, "titleName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_number', type: 'varchar', length: 15, nullable: true }),
    __metadata("design:type", String)
], user.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address', type: 'varchar', length: 250, nullable: true }),
    __metadata("design:type", String)
], user.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'zip', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], user.prototype, "zip", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], user.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], user.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false }),
    __metadata("design:type", Date)
], user.prototype, "createdAt", void 0);
exports.user = user = __decorate([
    (0, typeorm_1.Entity)({ name: 'demo', schema: 'public' })
], user);
exports.default = user;
