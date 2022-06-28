-- AlterTable
ALTER TABLE `accounts` ADD COLUMN `authenticatorSecret` VARCHAR(255) NOT NULL DEFAULT '',
    ADD COLUMN `hasAuthenticator` BOOLEAN NOT NULL DEFAULT false;
