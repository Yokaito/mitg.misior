-- AlterTable
ALTER TABLE `players` ADD COLUMN `ishidden` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `mainCharacter` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `towns` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `posx` INTEGER NOT NULL DEFAULT 0,
    `posy` INTEGER NOT NULL DEFAULT 0,
    `posz` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `towns_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
