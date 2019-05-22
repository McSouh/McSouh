<?php

use Illuminate\Database\Seeder;

class ProjectSkillTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('project_skill')->insert([
            array('project_id' => 1, 'skill_id' => 2),
            array('project_id' => 1, 'skill_id' => 3),
            array('project_id' => 1, 'skill_id' => 4),
            array('project_id' => 1, 'skill_id' => 7),
            array('project_id' => 1, 'skill_id' => 8),
            array('project_id' => 2, 'skill_id' => 6),
            array('project_id' => 2, 'skill_id' => 7),
            array('project_id' => 3, 'skill_id' => 3),
            array('project_id' => 3, 'skill_id' => 7),
            array('project_id' => 3, 'skill_id' => 8)
        ]);
    }
}
