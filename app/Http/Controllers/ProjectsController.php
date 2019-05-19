<?php

namespace App\Http\Controllers;

use App\Project;
use App\Traits\ImageTrait;
use Illuminate\Http\Request;
use App\Skill;

class ProjectsController extends Controller
{
    use ImageTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->with('skills')->get();

        return $projects->toJson();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $attributes = request()->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|image',
            'github' => 'required',
        ]);

        if(request()->has('image')){
            $image = request()->file('image');
            $name = str_slug(request()->input('title')).'_'.time();
            $folder = '/uploads/images/';
            $filePath = $folder . $name. '.' . $image->getClientOriginalExtension();
            $this->uploadImage($image, $folder, 'public', $name);
            $attributes['image'] = $filePath;  
        }

        $project = Project::create($attributes);
        
        if(request()->has('skills')){
            $skills = request()->skills;
            $skills = explode(',', $skills);
            foreach($skills as $skill){
                $project->skills()->attach($skill);
            }
        }
        
        
        return response()->json('Project created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Projects  $projects
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::find($id);

        return $project->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Projects  $projects
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project = Project::with('skills')->find($id);
        return $project->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Projects  $projects
     * @return \Illuminate\Http\Response
     */
    public function update(Project $project)
    {
        $attributes = request()->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'image',
            'github' => 'required',
        ]);
        
        if(request()->has('image')){
            $this->deleteImage($project->image);
            $image = request()->file('image');
            $name = str_slug(request()->input('title')).'_'.time();
            $folder = '/uploads/images/';
            $filePath = $folder . $name. '.' . $image->getClientOriginalExtension();
            $this->uploadImage($image, $folder, 'public', $name);
            $attributes['image'] = $filePath;  
        }
        
        $project->update($attributes);

        if(request()->has('skills')){
            $skills = request()->skills;
            $skills = explode(',', $skills);
            $project->skills()->sync($skills);
        }
        
        return response()->json('Project updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Projects  $projects
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        $this->deleteImage($project->image);
        $project->delete();

        return response()->json('Project deleted!');
    }
}
