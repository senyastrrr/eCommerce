<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;



class RolePermision
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        if (Auth::user()) {
            $user_role = Role::find(Auth::user()->role_id)->name;
            if (!in_array($user_role, $roles)) {
                abort(403, 'Your account permissions do not allow access to the requested page');
            }
    
            return $next($request);
        }
    }
}
