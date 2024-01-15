<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'Admin', 'description' => 'Administrator Role - Full access to all features.'],
            ['name' => 'User', 'description' => 'Regular User Role - Limited access to certain features.'],
            ['name' => 'Employee', 'description' => 'Employee Role - Access to specific employee-related features.'],
        ];

        // Insert the data into the roles table
        DB::table('roles')->insert($roles);
    }
}

