<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Seed an admin user
        DB::table('users')->insert([
            'full_name' => 'John Doe',
            'email' => 'admin@example.com',
            'password' => '123',
            'role_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Seed a regular user
        DB::table('users')->insert([
            'full_name' => 'Jane Doe',
            'email' => 'user@example.com',
            'password' => '123',
            'role_id' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Seed an employee user
        DB::table('users')->insert([
            'full_name' => 'Petr Petrov',
            'email' => 'employee@example.com',
            'password' => '123',
            'role_id' => 3,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}