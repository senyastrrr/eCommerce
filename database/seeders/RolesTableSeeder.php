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
            ['id'=> 1, 'name' => 'Admin', 'description' => 'Administrator Role - Full access to all features.'],
            ['id'=> 2, 'name' => 'User', 'description' => 'Regular User Role - Limited access to certain features.'],
            ['id'=> 3, 'name' => 'Employee', 'description' => 'Employee Role - Access to specific employee-related features.'],
        ];

        // Insert the data into the roles table
        DB::table('roles')->insert($roles);
    }
}

