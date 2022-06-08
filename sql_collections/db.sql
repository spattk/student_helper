CREATE TABLE public.groupprojectmapping (
    group_id integer NOT NULL,
    project_id integer,
    grade character varying(2)
);

CREATE TABLE public.projects (
    project_id serial PRIMARY KEY,
    project_name text,
    project_description text,
    github_url text,
    video_url text,
    funding_url text,
    status character varying(20),
    domain text,
    professor_id integer
);

CREATE TABLE public.projectstorymapping (
    project_id integer,
    story_id integer,
    developer_id integer
);

CREATE TABLE public.stories (
    story_id serial PRIMARY KEY,
    story_name text,
    story_description text,
    story_points integer,
    status character varying(20)
);

CREATE TABLE public.studentgroupmapping (
    user_id integer,
    group_id integer,
    is_user_owner boolean,
    is_active_group boolean DEFAULT true
);

CREATE TABLE public.users (
    user_id serial PRIMARY KEY,
    username character varying(255),
    password character varying(255),
    email text,
    first_name text,
    last_name text,
    phone character varying(10),
    role character varying(255),
    department character varying(20)
);

CREATE TABLE public.groups {
    group_id serial PRIMARY KEY,
    group_name character varying(255)
}

CREATE TABLE public.grading {
    grade_id serial PRIMARY KEY,
    group_id integer,
    week integer,
    grade character(2),
    professor_id integer,
    feedback text,
    comments text
}