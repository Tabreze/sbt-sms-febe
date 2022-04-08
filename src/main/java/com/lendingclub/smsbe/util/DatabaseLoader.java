/*
 * Copyright 2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.lendingclub.smsbe.util;

import com.lendingclub.smsbe.domain.SbtId;
import com.lendingclub.smsbe.repository.SbtidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author 
 */
// tag::code[]
@Component // <1>
public class DatabaseLoader implements CommandLineRunner { // <2>

	private final SbtidRepository repository;

	@Autowired // <3>
	public DatabaseLoader(SbtidRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String...strings) throws Exception { // <4>
		System.out.println(">>>>>>inserting data");
		{
			this.repository.save(new SbtId("1", "PAYMENT_REMINDER"));
			this.repository.save(new SbtId("2", "DQ_NOTICE"));
			this.repository.save(new SbtId("3", "OPT-IN_CONFIRMATION_MESSAGE"));
			this.repository.save(new SbtId("4", "SCHEDULED_PAYMENT_REMINDER"));
			this.repository.save(new SbtId("5", "PAYMENT_REMINDERS_WITH_NO_PAYMENT_LINK"));
			this.repository.save(new SbtId("6", "DQ_LIMITED_CONTENT_–_OPTION_1"));
			this.repository.save(new SbtId("7", "DQ_LIMITED_CONTENT_–_OPTION_2"));
			this.repository.save(new SbtId("8", "DPD_111"));
			this.repository.save(new SbtId("9", "DPD_13"));
			this.repository.save(new SbtId("10", "DPD_21"));
			this.repository.save(new SbtId("11", "DPD_28"));
			this.repository.save(new SbtId("12", "DPD_36"));
			this.repository.save(new SbtId("13", "DPD_43"));
			this.repository.save(new SbtId("55", "DPD_13_-_WITH_PNM_DEBIT_PAYMENT_LINK_(MINI-MIRANDA)"));
			this.repository.save(new SbtId("56", "PAYMENT_REMINDERS_WITH_PNM_DEBIT_PAYMENT_LINK"));
			
		}

		System.out.println(">>>>>>insertion done");
	}
}
// end::code[]