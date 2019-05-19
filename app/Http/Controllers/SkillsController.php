<?php

namespace App\Http\Controllers;

use App\Skill;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $skills = Skill::orderByRaw("FIELD(level, 'basic', 'intermediate', 'advanced', 'expert') ASC")->get();

        return $skills->toJson();
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
            'name' => 'required',
            'level' => 'required',
        ]);


        Skill::create($attributes);

        return response()->json('Skill created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $skill = Skill::find($id);

        return $skill->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $skill = Skill::find($id);

        return $skill->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function update(Skill $skill)
    {
        $attributes = request()->validate([
            'name' => 'required',
            'level' => 'required',
        ]);


        $skill->update($attributes);

        return response()->json('Skill updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $skill = Skill::find($id);

        $skill->delete();

        return response()->json('Skill deleted!');
    }
}
