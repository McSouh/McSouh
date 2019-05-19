<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'name', 'level',
    ];

    public function projects()
    {
        return $this->belongsToMany('App\Project');
    }
}