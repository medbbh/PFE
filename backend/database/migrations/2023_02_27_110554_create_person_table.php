<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('person', function (Blueprint $table) {
            $table->id();
            $table->integer('nni');
            $table->string('name');
            $table->string('prenom');
            $table->integer('age');
            $table->string('sex');
            $table->string('nomvaccin');
            $table->integer('nbrdose');
            $table->string('terminervaccin');
            $table->date('dateprochaine');
            $table->string('lieu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('person');
    }
};
