/*
  Warnings:

  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `profile`;

-- CreateTable
CREATE TABLE `Poll` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img_url` VARCHAR(191) NULL,
    `poll_name` VARCHAR(191) NOT NULL,
    `departments` JSON NOT NULL,
    `description` TEXT NULL,
    `publish_type` ENUM('NOW', 'SCHEDULE') NOT NULL,
    `publish_date` DATETIME(3) NULL,
    `expiry_date` DATETIME(3) NULL,
    `show_on_feed_by` VARCHAR(191) NULL,
    `reminder_date` DATETIME(3) NULL,
    `hide_voter` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
