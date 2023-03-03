drop table landmark;
create table landmark(
    landmark_address VARCHAR,	
    designation_year INT,
    start_built_year int,
    recognize_time int,
    architect VARCHAR,
    latitude  decimal,
    longitude decimal,
    landmark_designation_date date
);
select * from landmark;


create table landmark(
	landmark_name varchar not null primary key,
	landmark_address varchar not null,
	designation_year int not null,
	start_built_year int not null,
	recognize_time int not null,
	architect varchar not null
	);
select * from landmark;