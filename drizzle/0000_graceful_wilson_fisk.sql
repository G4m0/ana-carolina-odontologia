CREATE TABLE `contacts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`interest` text NOT NULL,
	`message` text,
	`created_at` text NOT NULL
);
