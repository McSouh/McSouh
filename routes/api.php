<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/admin/projects', 'ProjectsController');
Route::resource('/admin/skills', 'SkillsController');

Route::get('/projects', 'HomeController@projects');
Route::get('/projects3', 'HomeController@projects3');
Route::get('/projects/{project}', 'HomeController@project');
Route::get('/projects/skills/{skill}', 'HomeController@projectsBySkill');
Route::get('/skills', 'HomeController@skills');
Route::get('/skills/{project}', 'HomeController@skillsByProject');
