<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vaccins extends Model
{

    use HasFactory;

    protected $fillable = ['nom','pays','nbr_dose','fabricant'];
    protected $table = 'vaccins';
}
