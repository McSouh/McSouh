<?php

namespace App\Http\Controllers;

use App\Skill;
use App\Project;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function projects()
    {
        $projects = Project::orderBy('created_at', 'desc')->get();

        return $projects->toJson();
    }
    public function projects3()
    {
        $projects = Project::orderBy('created_at', 'desc')->limit(3)->get();

        return $projects->toJson();
    }
    public function project($id)
    {
        $project = Project::find($id);


        return $project->toJson();
    }
    public function skills()
    {
        $skills = Skill::orderByRaw("FIELD(level, 'basic', 'intermediate', 'advanced', 'expert') desc")->get();

        return $skills->toJson();
    }
    public function skillsByProject($id)
    {
        $project = Project::find($id);
        $skills = $project->skills;

        return $skills->toJson();
    }
    public function projectsBySkill($id)
    {
        $skill = Skill::find($id);
        $projects = $skill->projects;
        return $projects->toJson();
    }
}
