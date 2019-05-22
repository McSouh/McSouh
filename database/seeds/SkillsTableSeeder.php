<?php

use Illuminate\Database\Seeder;

class SkillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('skills')->insert([
                array('name' => 'HTML', 'level' => 'expert'),
                array('name' => 'CSS & SCSS', 'level' => 'expert'),
                array('name' => 'Javascript', 'level' => 'expert'),
                array('name' => 'ReactJS', 'level' => 'advanced'),
                array('name' => 'Wordpress', 'level' => 'intermediate'),
                array('name' => 'Wordpress Developper', 'level' => 'advanced'),
                array('name' => 'PHP', 'level' => 'intermediate'),
                array('name' => 'Laravel', 'level' => 'advanced')
        ]);
    }
}
